import axios from "axios";
import { toast } from "react-toastify";
import { companie } from "../../services/api";

export function useCompanie() {

  const postMsgCompanie = (values) => {
    axios.post(companie, values, {
    })
    .then((res) => {
      toast.success('Mensagem enviada com sucesso!');
    })
    .catch(err => {
      toast.error('Falha ao enviar a mensagem!');
    });
  }

  return {
    postMsgCompanie,
  }
}
