const fn = (req: any, res: any) => {
  res.status(200).json({ name: 'John Doe' })
}

export default fn;