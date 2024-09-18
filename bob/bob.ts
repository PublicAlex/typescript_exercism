export function hey(message: string): string {
  // Trim whitespace from the start and end of the message
  message = message.trim();

  // Check if the message is silence
  if (message.length === 0) {
    return "Fine. Be that way!";
  }

  // Check if the message is a yelling question
  if (message.endsWith('?') && message.toUpperCase() === message && /[A-Z]/.test(message)) {
    return "Calm down, I know what I'm doing!";
  }

  // Check if the message is a question
  if (message.endsWith('?')) {
    return "Sure.";
  }

  // Check if the message is yelling
  if (message.toUpperCase() === message && /[A-Z]/.test(message)) {
    return "Whoa, chill out!";
  }

  // Default response for anything else
  return "Whatever.";
}
