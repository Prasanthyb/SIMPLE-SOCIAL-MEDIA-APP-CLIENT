import React from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from  "yup";
import axios from "axios";

const CreatePost = () => {
    const initialValues={
        title:"",
        postText:"",
        username:""
    };

    const validationSchema=Yup.object().shape({

        title:Yup.string().required(),
        postText:Yup.string().required(),
        username:Yup.string().min(3).max(15).required()

    })




    const onSubmit=(data)=>{
        axios.post("http://localhost:4000/posts",data).then((response) => {
            console.log("It worked");
          });

    }

  return (
    <div className="createPostPage">
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <Form className="formContainer">
    <label> Title:</label>
    <ErrorMessage name="title" component="span" />
    <Field id="inputCreatePost" name="title" placeholder="Enter Title....." />
    <label> Post:</label>
    <ErrorMessage name="postText" component="span" />
    <Field id="inputCreatePost" name="postText" placeholder="Enter Post....." />
    <label> Username:</label>
    <ErrorMessage name="username" component="span" />
    <Field id="inputCreatePost" name="username" placeholder="Enter Username....." />

    <button type="submit">Create Post</button>
    </Form>
    </Formik>


      
    </div>
  );
}

export default CreatePost;
