const copyToClipboard = async (str: string) => {
  const { clipboard } = window.navigator

  /*
   * fallback to older browsers (including Safari)
   * if clipboard API is not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`)
    textarea.value = str
    textarea.setAttribute(`readonly`, `true`)
    textarea.setAttribute(`contenteditable`, `true`)
    textarea.style.position = `absolute`
    textarea.style.left = `-9999px`
    document.body.appendChild(textarea)
    textarea.select()
    const range = document.createRange()
    const sel = window.getSelection()
    sel?.removeAllRanges()
    sel?.addRange(range)
    textarea.setSelectionRange(0, textarea.value.length)

    try {
      await navigator.clipboard.writeText(str)
      return Promise.resolve(true)
    } catch (err) {
      console.error(`Failed to copy text: `, err)
      return Promise.reject(err)
    } finally {
      document.body.removeChild(textarea)
    }
  }

  try {
    await navigator.clipboard.writeText(str)
    return Promise.resolve(true)
  } catch (err) {
    console.error(`Failed to copy text: `, err)
    return Promise.reject(err)
  }
}

export default copyToClipboard
