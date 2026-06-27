import bankerAlgorithm from "../utils/bankerAlgorithm.js";

export const runBankerAlgorithm = (req, res) => {
  try {
    const {
      available,
      allocation,
      maximum,
      processes,
    } = req.body;

    // Validation
    if (
      !available ||
      !allocation ||
      !maximum ||
      !processes
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing input data.",
      });
    }

    const result = bankerAlgorithm({
      available,
      allocation,
      maximum,
      processes,
    });

    res.json({
      success: true,
      ...result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};