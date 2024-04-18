import { addNGO, searchNGO, updateNGO } from "../services/ngoService.js";

const addNgo = async (req, res) => {
  try {
    const result = await addNGO(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const searchNgo = async (req, res) => {
  try {
    const result = await searchNGO(req.query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateNgo = async (req, res) => {
  try {
    const result = await updateNGO(req.params.id, req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { addNgo, searchNgo, updateNgo };
