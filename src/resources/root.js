// if ResourceName is empty, all keys will be written in the store root
// and not in a store module

const ResourceName = "";

const list = (res) => res.data;

export default {
  __name: ResourceName,
  Photos: {
    apiModel: "photos",
    apiModule: ResourceName,
    handler: { list },
  },
  Albums: {
    apiModel: "albums",
    apiModule: ResourceName,
    handler: { list },
  },
  Users: {
    apiModel: "users",
    apiModule: ResourceName,
    handler: { list },
  },
};
