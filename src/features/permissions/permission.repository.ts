import { Permission } from "./models/permission.model";

const getAllPermissionsRepo = async (): Promise<object> => {
  const permissions = await Permission.findAll();
  return permissions;
};

export { getAllPermissionsRepo };
