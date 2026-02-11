Instructions to add Resume PDF

1. Compile the LaTeX source `public/resume.tex` into `public/resume.pdf`.

   Example (local machine with pdflatex):

```bash
cd public
pdflatex resume.tex
```

2. Ensure `public/resume.pdf` exists. The site `Hero` now links to `/resume.pdf`.

3. If you prefer, you can edit `public/resume.tex` and re-run `pdflatex` to regenerate PDF.
