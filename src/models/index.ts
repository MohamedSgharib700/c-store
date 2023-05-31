// // TODO (major): remove after refctoring

// import { Category } from "../features/categories/models/category.model";
// import { PermissionRole } from "../features/permissions/models/permission-role.model";
// import { Permission } from "../features/permissions/models/permission.model";
// import { RoleUser } from "../features/roles/models/role-user.model";
// import { Role } from "../features/roles/models/role.model";
// import User from "../features/users/models/user.model";
// import { Video } from "../features/videos/models/video.model";

// // Permission.belongsToMany(Role, {
// //   as: "roles",
// //   through: PermissionRole,
// // });

// // Role.belongsToMany(Permission, {
// //   as: "permissions",
// //   through: PermissionRole,
// // });

// Role.belongsToMany(User, {
//   as: "users",
//   through: RoleUser,
// });

// User.belongsToMany(Role, {
//   as: "roles",
//   through: RoleUser,
// });

// // Category.hasMany(Video, { as: "videos" });

// // Video.belongsTo(Category);

// export { Role, User };
