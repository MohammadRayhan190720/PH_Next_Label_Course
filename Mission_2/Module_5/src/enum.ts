// enum => set of fixed string leteral ek jaygay rakhe


// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}


const canEdit = (role: UserRoles) =>{
  if(role === UserRoles.Admin || role === UserRoles.Editor){
    return true
  }
  return false;
}

const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable)