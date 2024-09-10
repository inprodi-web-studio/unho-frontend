import { toast } from "sonner";

export const showNotification = (message, config) => {
    switch (config?.type) {
        case "success":
            return toast.success(message);

        case "info":
            return toast.info(message);

        case "warning":
            return toast.warning(message);

        case "error":
            return toast.error(message);

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