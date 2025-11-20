//as const assertion



// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer"
// }

const UserRoles = {
  Admin : "Admin",
  Editor : "Editor",
  Viewer : "Viewer",
} as const ;

//typeOf
//keyOf


const canEdit = (role: keyof typeof UserRoles) =>{
  if(role === UserRoles.Admin || role === UserRoles.Editor){
    return true
  }
  return false;
}

const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable)