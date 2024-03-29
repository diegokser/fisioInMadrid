const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			new_password: {},
			user_data: {},
			blogs:[],
			blog:null,
			isloged: false,
		},
		actions: {
			// Use getActions to call a function within a fuction
			signup: async (email, password) => {
				const store = getStore()
				// console.log(email,password)
				const newUser = {
					email : email,
					password : password
				}
				// console.log(newUser)
				try {
					const response = await fetch(
					  process.env.BACKEND_URL + "/api/admin/signup",
					  {
						method: "POST",
						headers: {
						  "Content-Type": "application/json",
						},
						body: JSON.stringify(newUser),
					  }
					);
					const result = await response.json();
					if (response.status == 200) {
					  return true;
					}
					return result.message;
				  } catch (error) {
					console.log(error);
				  }
				},
			changePassword: async (password) => {
				const store = getStore()
				// console.log(password)
				const newPassword = {
					password : password,
				}
				// console.log(newPassword)
				try {
					const token = localStorage.getItem("jwt-token");
					const response = await fetch(
					  process.env.BACKEND_URL + `/api/admin/change/${store.user_data}`,
					  {
						method: "PUT",
						headers: {
						  "Content-Type": "application/json",
						  Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify(newPassword),
					  }
					);
					const result = await response.json();
					if (response.status == 200) {
					  return true;
					}
					return result.message;
				  } catch (error) {
					console.log(error);
				  }
				},
			login: async (user) =>{
				const store = getStore()
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/admin/login", {
					  method: "POST",
					  body: JSON.stringify(user),
					  headers: {
						"Content-Type": "application/json",
					  },
					});
					const result = await response.json();
					console.log("Response status:", response.status);
					console.log("Response message:", result.message);
					if (response.status == 200) {
						localStorage.setItem("jwt-token", result.token);
						// Almacena la ID del usuario en el almacenamiento local
						localStorage.setItem("user_id", result.user_data.id);
						console.log("Logeado con éxito");
						setStore({ isloged: true });
						setStore({ jwt_token: result.token });
						setStore({
							user_data: {
								...store.user_data,
								id: result.user_data.id,
							},
						});
						return { success: true, message: "Inicio de sesión realizado con éxito" };
					}else {
						console.log("Error al iniciar sesión:", result.message);
						return { success: false, message: result.message };
					  }
					} catch (error) {
					  console.log("Error al cargar datos desde el servidor:", error);
					  return { success: false, message: "Error al conectarse al servidor" };
					}
			},
			isloged: () => {
			// Tenemos que poner en el fichero appContext esta función para que se pueda llamar en un useEffect si queremos que se ejecute 

				const token = localStorage.getItem("jwt-token");
				const userId = localStorage.getItem("user_id");

				// Check if the token exists and is not expired
				if (token) {
					const decodedToken = JSON.parse(atob(token.split(".")[1]));
					const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds
					const currentTime = Date.now();

					if (currentTime >= expirationTime) {
						console.log("Se ha acabado el token");
						setStore({ isloged: false });
						localStorage.removeItem("jwt-token") // Esto hace que se elimine solo el token y el de abajo elimina todo el localstorage por lo que nos dificulta las cookies
						// localStorage.clear(); 
						return false;
					}

					setStore({ jwt_token: token });
					setStore({ isloged: true });
					setStore({ user_data: JSON.parse(userId) });
					return true;
			  }
	  
			  // Token doesn't exist
			  setStore({ isloged: false });
			//   localStorage.clear();
			  localStorage.removeItem("jwt-token")
			  
			  return false;
			},
			logout: () => {
				setStore({ isloged: false });
				// localStorage.clear();  
				localStorage.removeItem("jwt-token")
				setStore({ user_data: {} });
			  },
			img_upload: async (img) => {
				const store = getStore()
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/postimg",
						{
							method: "POST",
							body: img,
						}
					);
					const result = await response.json();
					if (response.status === 200) {
						return result;
					} else {
						return { message: "Error uploading image" };
					}
				} catch (error) {
					console.log("Error loading message from backend");
				}
			},
			post: async (title, description, img) => {
				const store = getStore();
				const newPost = {
				  title: title,
				  description: description,
				  img: img,
				  user_id: store.user_data.id
				};
		
				try {
				  const token = localStorage.getItem("jwt-token");
				  const response = await fetch(
					process.env.BACKEND_URL + "/api/admin/post",
					{
					  method: "POST",
					  headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token,
					  },
					  body: JSON.stringify(newPost),
					}
				  );
				  const result = await response.json();
				  if (response.status == 401) {
					console.log("error al agregar post");
				  }
				  if (response.status == 200) {
					console.log(response);
					return true;
				  }
				  return false;
				} catch (error) {
				  console.log(error);
				}
			  },
			  editPost: async (id, title, description, img) => {
				const store = getStore();
				const newPost = {
				  id: id,
				  title: title,
				  description: description,
				  img: img,
				  user_id: store.user_data.id
				};
		
				try {
				  const token = localStorage.getItem("jwt-token");
				  const response = await fetch(
					process.env.BACKEND_URL + `/api/admin/edit/${id}`,
					{
					  method: "PUT",
					  headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token,
					  },
					  body: JSON.stringify(newPost),
					}
				  );
				  const result = await response.json();
				  if (response.status == 401) {
					console.log("error al modificar post");
				  }
				  if (response.status == 200) {
					console.log(response);
					return true;
				  }
				  return false;
				} catch (error) {
				  console.log(error);
				}
			  },
			  blogs: () =>{
				fetch(process.env.BACKEND_URL + "/api/post")
				.then((response) => response.json())
				.then((response) => {
					console.log(response)
					setStore({blogs: response})
				})
			  },
			  blog: (id) =>{
				fetch(`${process.env.BACKEND_URL}/api/post/${id}`)
				.then((response) => response.json())
				.then((response) => {
					console.log(response)
					setStore({blog: response})
				})
			  }
		}
	};
};

export default getState;
