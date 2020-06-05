# JS Assíncrono

[Exemplo.js](async.js)

<p align = 'center'>
    <img src='assets/arquitetura.gif' width='600' height = '400'>
</p>

* Call Stack: pilha de chamadas
 
    A call stack é síncrona - executa linha a linha

* Callback Queue: 
  
    Quando uma função que contém uma callback (assíncrona) termina execucação e chama essa callback para ser executada  

* Event Loop
  
  Executa continuamente e checa se a Stack principal tem algum Frame para ser executado. Caso não haja nada na Stack principal checa-se a Task Queue.

  ## Notas sobre a execução do código

  * Os códigos assíncronos vão rodar depos que o "Main Stack" estiver completado suas tarefas de execução
  * setTimeout com 0 não significa execução imediata 

### [Referência](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd)