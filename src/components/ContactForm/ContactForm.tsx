import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./ContactForm.module.css";
import * as Yup from "yup";

// Типы для данных формы

interface FormValues {
  name: string;
  email: string;
  message: string;
}

// Схема валидации для формы Yup

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Имя должно быть не менее 2 символов")
    .required("Введите ваше имя"),
  email: Yup.string()
    .email("Введите корректный email")
    .required("Введите ваш email"),
  message: Yup.string()
    .min(10, "Сообщение должно быть не менее 10 символов")
    .required("Введите ваше сообщение"),
});

function ContactForm() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values: FormValues) => {
    // Здесь можно обработать отправку данных, например, отправить на сервер
    console.log("Отправленные данные:", values);
    alert(`Сообщение отправлено, ${values.name}`);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.formContainer}>
        <h2 className={style.formTitle}>Форма обратной связи</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {/* 👉 Здесь: */}
          {/* <Formik> управляет состоянием формы;
    <Form> автоматически подключается к Formik-контексту;
    <Field> связан с конкретным полем данных (name);
    <ErrorMessage> отображает ошибки для указанного поля. */}
          <Form className={style.form}>
            <div className={style.formGroup}>
              <label htmlFor="name">Имя:</label>
              <Field
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                className={style.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={style.error}
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                placeholder="Введите ваш email"
                className={style.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={style.error}
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="message">Сообщение:</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Введите ваше сообщение"
                className={style.textarea}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={style.error}
              />
            </div>

            <button type="submit" className={style.submitBtn}>
              <b>Отправить</b>
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default ContactForm;

// Ключевые моменты:

// useFormik — это хук, поэтому:

// Следует правилам хуков React

// Схема Yup передается в конфигурацию через свойство validationSchema

// Formik автоматически:

// Выполняет валидацию при изменении значений и потере фокуса

// Сохраняет ошибки в formik.errors

// Отслеживает, какие поля были "тронуты" в formik.touched
