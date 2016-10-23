<h3 class="container-title title">Inserta las preguntas nuevas:</h3>
<form method="POST" action="" class="quiz" id="formQuiz">
    <div class="quiz-question">
        <div class="quiz-question-container">
            <div class="question-pos">1</div>
            <input type="text" name="pregunta[]" value="" placeholder="Introduce una nueva pregunta..." class="question" required>
        </div>
        <div class="quiz-question--answer">
            <label for="respuestas[]" class="fa fa-check correct"></label>
            <input type="text" name="respuestas[]" class="answer" value="" required>
            <label for="dificultad[]" class="fa fa-tachometer"></label>
            <input type="number" min="0" max="5" name="dificultad[]" value="0" class="quiz-difficulty">
            <label for="subject[]" class="fa fa-book"></label>
            <select class="select-subject" name="">
              <option value="Internet">Internet</option>
              <option value="Web">Web</option>
            </select>
        </div>
    </div>

    <div class="hexagon" id="newQuestion">
        <i class="fa fa-plus"></i>
    </div>


    <input type="submit" name="name" value="¡ Añadir pregunta/s !" class="quiz-submit">
</form>
