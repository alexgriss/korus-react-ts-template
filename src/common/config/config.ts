import { pathOr, split } from 'ramda';

export const config = {
  maxFileSize: 11000,
  modules: {
    errors: 'errors',
    loading: 'loading',
    notices: 'notices',
    router: 'router',
  },
  environment: process.env.NODE_ENV,
  defaultDelay: 2000,
};

/**
 * Метод возвращает значение конфига или значение по умолчанию
 *
 * @param {string} settingPath - Путь к настроке в стиле path/to/need/config
 * @param {any} defaultValue - Значение по умолчанию
 * @param {string} separator - Разделитель для пути
 *
 * @returns {any} Значение настроки либо значение по-умолчанию
 */
export const getConfig = (
  settingPath: string,
  defaultValue: any = null,
  separator: string = '.',
) => pathOr(defaultValue, split(separator, settingPath), config);
