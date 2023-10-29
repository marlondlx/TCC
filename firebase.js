  /*

  document
    .getElementById("acao-button")
    .addEventListener("click", function () {
      //criarPizza();
      getPizzas();
    });

 

  //criarPizzaButton.addEventListener("acao-button", criarPizza);

  const getPizzas = async () => {
    const data = await getDocs(pizzaCollectionRef);
    setPizzas(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };
  useEffect(() => {
    getPizzas();
  }, [pizzas]);


  */