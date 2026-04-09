export interface Env {
  // Static asset binding configured in wrangler.worker.toml.
  ASSETS?: {
    fetch(request: Request): Promise<Response>;
  };
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return json({ ok: true, service: 'myschoolgreen-api' });
    }

    if (url.pathname === '/api/time') {
      return json({ now: new Date().toISOString() });
    }

    // Keep API paths strict: unknown API routes should still return 404 JSON.
    if (url.pathname.startsWith('/api/')) {
      return json(
        {
          ok: false,
          message: 'Not found',
        },
        404
      );
    }

    // Serve frontend SPA from Worker static assets for all non-API routes.
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Frontend assets are not configured. Run build and redeploy worker.', {
      status: 503,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  },
};
