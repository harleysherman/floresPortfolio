export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkName(input) {
  const name = /^[A-Za-z]\w{2,50}$/;
  if (input.match(name)) {
    return true;
  }
  return false;
}

export function checkMessage(input) {
  const message = /^[A-Za-z]\w{2,280}$/;
  if (input.match(message)) {
    return true;
  }
  return false;
}
