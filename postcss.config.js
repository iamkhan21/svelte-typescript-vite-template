module.exports = {
  plugins: [
    require("postcss-utilities"),
    require("postcss-preset-env")({ stage: 0 }),
    require("precss"),
    require("cssnano")({ preset: "advanced" }),
  ],
};
