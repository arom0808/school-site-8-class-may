import MyHead from "../../components/my-head";
import React from "react";
import LessonLayout from "../../components/layouts/lesson-layout";

export default function FirstLesson() {
    return (
        <main className="text-white p-5">
            <MyHead/>
            <div className="text-center text-4xl font-bold">Базовый экскурс в начало алгоритмов</div>
            <p className="text-left">Для начала я вас познакомлю с таким понятием, как машина тьюринга(ТМ).<br/>Это
                абстрактное воображаемое устройство, которое было придумано Аланом Тьюрингом в 1936 г.<br/>В те времена
                все расчеты проводились в ручную, что во первых было очень затратно, а во вторых не очень точно.<br/>Тьюринг
                хотел создать полностью механический вычислитель, мощности которого хватало бы для задач любой
                сложности, но который был бы достаточно простым, чтобы принцип работы оставался понятен.<br/>Он пришел к
                мысли об устройстве, закрепленном на бесконечной ленте с квадратными ячейками, содержащими либо 0 либо
                1.<br/>Аппарат оснащен головкой чтения-записи, которая считывает по одной цифре за 1 раз, а дальше может
                выполнить одну из нескольких операций:</p>
            <ul>
                <li className="text-left">Записать сверху новое значение.</li>
                <li className="text-left">Перейти влево или вправо.</li>
                <li className="text-left">Остановиться.</li>
            </ul>
            <p>Остановка означает заврщение программы.</p>
        </main>
    )
}
FirstLesson.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <LessonLayout>
            {page}
        </LessonLayout>
    )
}