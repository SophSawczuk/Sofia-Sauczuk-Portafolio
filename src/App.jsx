import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const seccionInicio = useRef(null);
  const seccionAcercaDe = useRef(null);
  const seccionProyectos = useRef(null);
  const seccionExperiencia = useRef(null);
  const seccionEstudios = useRef(null);
  const seccionServicios = useRef(null);
  const seccionContacto = useRef(null);

  const scrollA = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        onIrInicio={() => scrollA(seccionInicio)}
        onIrAcercaDe={() => scrollA(seccionAcercaDe)}
        onIrProyectos={() => scrollA(seccionProyectos)}
        onIrExperiencia={() => scrollA(seccionExperiencia)}
        onIrEstudios={() => scrollA(seccionEstudios)}
        onIrServicios={() => scrollA(seccionServicios)}
        onIrContacto={() => scrollA(seccionContacto)}
      />
      <Routes>
        <Route 
          exact path="/" 
          element={<Home 
            refInicio={seccionInicio}
            refAcercaDe={seccionAcercaDe}
            refProyectos={seccionProyectos}
            refExperiencia={seccionExperiencia}
            refEstudios={seccionEstudios}
            refServicios={seccionServicios}
            refContacto={seccionContacto}
          />}/>
      </Routes>

    </>
  )
}

export default App

