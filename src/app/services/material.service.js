import httpService from './http.service';

const materialEndpoint = 'material/';

const materialService = {
  fetchAll: async () => {
    const { data } = await httpService.get(materialEndpoint);
    return data;
  },
};
export default materialService;
