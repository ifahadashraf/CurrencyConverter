import { apiCaller } from '../api-caller';
import { ENDPOINTS } from '../constants';

export const fetchConversionRatesAPI = base =>
  apiCaller({
    url: `${ENDPOINTS.LATEST}?base=${base}`,
    params: base,
  });
