import { App } from 'vue';
import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default {
  install: (app: App) => {
    app.use(Toast);

    const toast = useToast();

    // eslint-disable-next-line no-param-reassign
    app.config.errorHandler = (err: unknown) => {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    };
  },
};
