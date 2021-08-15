import { toast } from "react-toast";
function errorHelper(error) {
  console.log(`ERROR: ${error.response.data.status_message}`);
  toast.error(error.response.data.status_message);
}

export default errorHelper;
