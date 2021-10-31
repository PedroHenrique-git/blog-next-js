export const formatDate = (date: string) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
