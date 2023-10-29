import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    setDoc,
    getDocs,
  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB3KuPCxDKFWaVlG-nCKp1ZrYwR2TuhPFI",
    authDomain: "ipizza-tcc.firebaseapp.com",
    projectId: "ipizza-tcc",
    storageBucket: "ipizza-tcc.appspot.com",
    messagingSenderId: "702160010379",
    appId: "1:702160010379:web:b4d4d29e95e1fe0b48288e",
    measurementId: "G-P1Y6ZS7GZL",
  };

  const saborInput = document.getElementById("sabor");
  const tamanhoInput = document.getElementById("tamanho");
  const tipoInput = document.getElementById("tipo");
  const ingredientesInput = document.getElementById("ingredientes");
  const criarPizzaButton = document.getElementById("criarPizzaButton");

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const pizzaCollectionRef = collection(db, "pizzas");

  async function criarPizza() {
    const sabor = saborInput.value;
    const tamanho = tamanhoInput.value;
    const tipo = tipoInput.value;
    const ingredientes = ingredientesInput.value;

    try {
      await addDoc(pizzaCollectionRef, {
        sabor,
        tamanho,
        tipo,
        ingredientes,
      });
      console.log("Pizza criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar a pizza:", error);
    }
  }

  document
    .getElementById("acao-button")
    .addEventListener("click", function () {
      //criarPizza();
      getPizzas();
    });

  async function getPizzas() {
    const data = await getDocs(pizzaCollectionRef);
    const pizzas = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  
    console.log(pizzas);
  }

  //criarPizzaButton.addEventListener("acao-button", criarPizza);
  /*
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
  async function deletePizza(id) {
    const pizzaDoc = doc(db, "pizzas", id);
    await deleteDoc(pizzaDoc);
  }
  async function atualizaPizza(id, dados) {
    await setDoc(doc(db, "pizzas", id), dados);
  }
  */