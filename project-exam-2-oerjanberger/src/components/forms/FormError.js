import propTypes from "prop-types";

export default function FormError({ children }) {
    return <p className="form__error">{children}</p>
};

FormError.propTypes = {
    children: propTypes.node.isRequired,
};