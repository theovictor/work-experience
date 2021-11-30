import axios from "axios";
import { toast } from "react-toastify";
import { contact } from "../../services/api";

export function useContact() {

  const postContact = (values) => {
    axios.post(contact, values)
    .then((res) => {
      toast.success('Mensagem enviada com sucesso!');
    })
    .catch(err => {
      toast.error('Falha ao enviar a mensagem!');
    });
  }

  return {
    postContact,
  }
}
