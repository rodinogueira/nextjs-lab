"use client";

import React, { useRef } from "react";

const FlexboxExamples = () => {
  const inputRef = useRef<HTMLInputElement>(null);


  const focusInput = () => {
    // Acessando o valor da ref para dar foco no input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h1 className="text-gray-700 text-2xl sm:text-sm md:text-9xl xl:text-lg">Rodrigo Nogueira FullStack Developer</h1>
      <div className="flex flex-col md:flex-row md:w-1/2 gap-8 justify-start bg-white p-4 shadow-md">
          <div className="w-full bg-green-500 p-4 text-white">1</div>
          <div className="w-full bg-gray-300 p-4 text-white">2</div>
      </div>

      <div className="flex flex-col md:flex-row md:w-1/2 md:mx-auto gap-4 mx-4 m-4">
        <div className="w-full bg-blue-500 p-4 text-white">Container 1</div>
        <div className="w-full bg-green-500 p-4 text-white">Container 2</div>
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center">

      <div className="gap-12 p-8 w-1/2">
        {/* 1. Alinhar à Esquerda */}
        <div className="flex flex-row w-full gap-8 justify-start bg-white p-4 shadow-md">
          <div className="bg-green-500 p-4 text-white">1</div>
          <div className="bg-gray-300 p-4 text-white">2</div>

          <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput} className="p-4 text-green hover:cursor-pointer">Focar no input</button>
      </div>
        </div>

        {/* 2. Centralizar Horizontalmente */}
        <div className="flex flex-row w-full gap-8 justify-center bg-white p-4 shadow-md">
          <div className="bg-orange-500 p-4 text-white">2</div>
          <div className="bg-amber-800 p-4 text-white">3</div>
        </div>

        {/* 3. Alinhar à Direita */}
        <div className="flex flex-row w-full gap-8 justify-end bg-white p-4 shadow-md">
          <div className="bg-orange-500 p-4 text-white">4</div>
          <div className="bg-amber-800 p-4 text-white">5</div>
        </div>

        {/* 4. Distribuir com espaço entre os itens */}
        <div className="flex flex-row w-full gap-8 justify-between bg-white p-4 shadow-md">
          <div className="bg-orange-500 p-4 text-white">6</div>
          <div className="bg-amber-800 p-4 text-white">7</div>
        </div>

        {/* 5. Distribuir com margem igual antes, entre e depois */}
        <div className="flex flex-row w-full gap-8 justify-around bg-white p-4 shadow-md">
          <div className="bg-orange-500 p-4 text-white">8</div>
          <div className="bg-amber-800 p-4 text-white">9</div>
        </div>

        {/* 6. Distribuir totalmente igual */}
        <div className="flex flex-row w-full gap-8 justify-evenly bg-white p-4 shadow-md">
          <div className="bg-orange-500 p-4 text-white">10</div>
          <div className="bg-amber-800 p-4 text-white">11</div>
        </div>

        {/* 7. Alinhar ao topo */}
        <div className="flex flex-row w-full gap-8 items-start bg-white p-4 shadow-md h-24">
          <div className="bg-orange-500 p-4 text-white">12</div>
          <div className="bg-amber-800 p-4 text-white">13</div>
        </div>

        {/* 8. Centralizar Verticalmente */}
        <div className="flex flex-row w-full gap-8 items-center bg-white p-4 shadow-md h-24">
          <div className="bg-orange-500 p-4 text-white">14</div>
          <div className="bg-amber-800 p-4 text-white">15</div>
        </div>

        {/* 9. Alinhar à base */}
        <div className="flex flex-row w-full gap-8 items-end bg-white p-4 shadow-md h-24">
          <div className="bg-orange-500 p-4 text-white">16</div>
          <div className="bg-amber-800 p-4 text-white">17</div>
        </div>

        {/* 10. Um item maior que o outro */}
        <div className="flex flex-row w-full gap-8 bg-white p-4 shadow-md">
          <div className="flex-grow bg-orange-500 p-4 text-white">18</div>
          <div className="bg-amber-800 p-4 text-white">19</div>
        </div>

        {/* 11. Um item fixo, outro flexível */}
        <div className="flex flex-row w-full gap-8 bg-white p-4 shadow-md">
          <div className="bg-orange-500 p-4 text-white">20</div>
          <div className="flex-1 bg-amber-800 p-4 text-white">21</div>
        </div>

        {/* 12. Totalmente Centralizado */}
        <div className="flex flex-row w-full gap-8 justify-center items-center bg-white p-4 shadow-md h-24">
          <div className="bg-orange-500 p-4 text-white">22</div>
          <div className="bg-amber-800 p-4 text-white">23</div>
        </div>
      </div>
      </div>  
    </>
  );
};

export default FlexboxExamples;