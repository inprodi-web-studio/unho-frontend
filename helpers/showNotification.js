import { toast } from "sonner";

export const showNotification = (message, config) => {
    switch (config?.type) {
        case "success":
            return toast.success(message, { id : config.id });

        case "info":
            return toast.info(message, { id : config.id });

        case "warning":
            return toast.warning(message, { id : config.id });

        case "error":
            return toast.error(message, { id : config.id });
        
        case "loading":
            return toast.loading(message, { id : config.id });

        case "action":
            return toast(message, {
                action: {
                    label: config.action?.label || "Close",
                    onClick: config.action?.onClick || (() => { }),
                },
            });

        default:
            return toast(message, {
                description: config?.description,
            });
    }
}

export const showNotificationConfig = {
    name       : "showNotification",
    importPath : "~/helpers/showNotification",
    params     : [
      {
        name        : "message",
        type        : "string",
        description : "The message to show in the notification",
      },
      {
        name        : "config",
        type        : "object",
        description : "The config for the notification",
      },
    ],
    isDefaultExport : false,
};