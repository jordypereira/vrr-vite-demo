import vrr from "@prorenata/vue-rest-resource";
import store from "../store";
import rootResourceObject from "../resources/root";

const RestConfig = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  defaultParams: {},
  httpHeaders: {},
  vrrModuleName: "VRR",
  store,
};

// Setup VRR
const vrrAPI = vrr.createVueRestResource(RestConfig);

export default vrrAPI;

// Register the resources
export const RootResource = vrrAPI.registerResource(rootResourceObject);
