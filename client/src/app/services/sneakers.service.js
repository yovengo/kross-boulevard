import httpService from './http.service';

const sneakersEndpoint = 'sneakers/';

const sneakersService = {
  get: async () => {
    const { data } = await httpService.get(sneakersEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(sneakersEndpoint + payload._id, payload);
    return data;
  },
};
export default sneakersService;
