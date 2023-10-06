const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			signup: async (email, password) => {
				const store = getStore()
				console.log(email,password)
				const newUser = {
					email : email,
					password : password
				}
				console.log(newUser)
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
					if (response.status == 200) {
						localStorage.setItem("jwt-token", result.token);
						console.log("Logeado con éxito")
					}else {
						return result.message;
					  }
					} catch (error) {
					  console.log("Error loading message from backend");
					}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
