import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import FormError from "../common/FormError";

const schema = yup.object().shape({
    body: yup.string().required("Did you forget to write something?"),
});

export default function CreateComment() {
    const [commentError, setCommentError] = useState(null);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    let { id } = useParams();
    const http = useAxios();

    async function onSubmit(data) {
        const commentUrl = BASE_URL + `social/posts/${id}/comment`
        setCommentError(null);

        try {
            await http.post(commentUrl, data);
            navigate(0);
        } catch (error) {
            console.log(error);
            setCommentError("We were unfortunately unable to submit your comment");
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="form__createComment">
            {commentError && <FormError>{commentError}</FormError>}
            <Form.Group className="mb-3">
                <Form.Control {...register("body")} as="textarea" placeholder="Write a comment..." className="primary__input" id="comment__input" />
                {errors.body && <FormError>{errors.body.message}</FormError>}
            </Form.Group>
            <button className="primary__btn form__btn">Post Comment</button>
        </Form>
    );
};