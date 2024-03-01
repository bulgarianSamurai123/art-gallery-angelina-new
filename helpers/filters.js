export function filterHandler(
  toggleAbstractCheck,
  toggleFaceCheck,
  toggleWinterCheck,
  toggleSummerCheck,
  abstractChecked,
  faceChecked,
  winterChecked,
  summerChecked
) {
    let filters

  return (filters = [
    {
      name: "Абстракций",
      check: abstractChecked,
      toggleCheck: toggleAbstractCheck,
    },
    {
      name: "Лица",
      check: faceChecked,
      toggleCheck: toggleFaceCheck,
    },
    {
      name: "Зима",
      check: winterChecked,
      toggleCheck: toggleWinterCheck,
    },
    {
      name: "Лято",
      check: summerChecked,
      toggleCheck: toggleSummerCheck,
    },
  ]);
}
