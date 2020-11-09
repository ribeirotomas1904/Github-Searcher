import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import ptBR from 'date-fns/locale/pt-BR';

export const formatDateDistanceToNow = (date) => {
  switch (typeof date) {
    case 'string':
      return formatDistanceToNow(Date.parse(date));
    default:
      return formatDistanceToNow(date);
  }
};
