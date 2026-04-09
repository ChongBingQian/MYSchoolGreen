import toast, { Toaster as HotToaster, ToastOptions } from 'react-hot-toast';

// Re-export the Toaster component with default styling
export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#ffffff',
          color: '#162130',
          border: '1px solid #d8e0ea',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          padding: '0.75rem 1rem',
          boxShadow: '0 10px 24px rgba(22, 33, 48, 0.12)',
        },
        success: {
          iconTheme: {
            primary: '#418228',
            secondary: '#ffffff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
}

// Helper functions for consistent toast usage
export const showToast = {
  success: (message: string, options?: ToastOptions) => toast.success(message, options),
  error: (message: string, options?: ToastOptions) => toast.error(message, options),
  loading: (message: string, options?: ToastOptions) => toast.loading(message, options),
  custom: (message: string, options?: ToastOptions) => toast(message, options),
  dismiss: (toastId?: string) => toast.dismiss(toastId),
  promise: <T,>(
    promise: Promise<T>,
    msgs: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((err: Error) => string);
    },
    options?: ToastOptions
  ) => toast.promise(promise, msgs, options),
};

// Re-export original toast for advanced usage
export { toast };
