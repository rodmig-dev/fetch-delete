export default function App() {
  const deleteUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/4a52", {
        method: "DELETE", //metodo delete que remove o registro
      });
      if (response.status !== 404) {
        console.log("Usuário removido com sucessso!");
      } else {
        console.log("ID de usuário inexistente!!!");
      }
    } catch (error) {
      console.error("Erro na deleção", error);
    }
  };
  return <button onClick={deleteUser}>Deletar</button>;
}
