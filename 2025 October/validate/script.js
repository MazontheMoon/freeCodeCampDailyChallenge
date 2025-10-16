/**
 * Validates whether a given string is a properly formatted email address.
 *
 * The validation rules are:
 * - Must contain exactly one "@" symbol.
 * - The local part (before "@"):
 *   - Can include letters (a–z, A–Z), digits (0–9), dots (.), underscores (_), and hyphens (-).
 *   - Cannot start or end with a dot.
 *   - Cannot contain consecutive dots ("..").
 * - The domain part (after "@"):
 *   - Must contain at least one dot.
 *   - Must not contain consecutive dots ("..").
 *   - Must end with a dot followed by at least two letters (e.g., ".com", ".org").
 *
 * @param {string} email - The email address string to validate.
 * @returns {boolean} True if the email address is valid according to the specified rules; otherwise, false.
 */
function validate(email) {
  // Must contain exactly one '@'
  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  // Local and domain must not be empty
  if (!local || !domain) return false;

  // Check local part:
  // - allowed chars only
  // - no consecutive dots
  // - cannot start or end with a dot
  const localRegex = /^[A-Za-z0-9._-]+$/;
  if (
    !localRegex.test(local) ||
    local.startsWith('.') ||
    local.endsWith('.') ||
    local.includes('..')
  ) {
    return false;
  }

  // Check domain part:
  // - must contain at least one dot
  // - no consecutive dots
  // - must end with a dot + 2+ letters
  // - only allowed chars: letters, digits, hyphens, dots
  const domainRegex = /^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (
    !domainRegex.test(domain) ||
    domain.includes('..')
  ) {
    return false;
  }

  return true;
}