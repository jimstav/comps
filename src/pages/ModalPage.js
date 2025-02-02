import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        numquam temporibus dolorum culpa! Veritatis, dolor ullam inventore
        maiores quisquam amet beatae excepturi molestiae, quam ipsam tempore at
        eaque accusamus cum. Perspiciatis, aperiam, rem ea, ducimus nulla ut
        iste voluptatum tempore eaque distinctio non nisi amet. Dicta possimus
        similique mollitia, fugiat nihil at perspiciatis esse iusto ullam
        voluptates quo tempora eius illo deleniti rem fuga. Mollitia pariatur
        sint et tempora nam minus dolorem explicabo consequuntur dicta iure!
        Officiis quidem, velit ducimus dicta vel, eos iure voluptatem rerum
        illum excepturi fugiat maxime quod perspiciatis ipsum! Iste quisquam,
        officiis quaerat quam deserunt consequatur.
      </p>
    </div>
  );
}

export default ModalPage;
