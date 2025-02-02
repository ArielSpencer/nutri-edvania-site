import { Button } from "../ui/button";

const CategoriesBlog = () => {
  return (
    <div className="bg-background border-b shadow-md mb-4 flex flex-row gap-8 items-center justify-center">
      <h2 className="text-2xl">Categorias:</h2>
      <div className="flex flex-row items-center justify-center gap-8 py-8 ">
        <Button>Categoria 1</Button>
        <Button>Categoria 2</Button>
        <Button>Categoria 3</Button>
        <Button>Categoria 4</Button>
        <Button>Categoria 5</Button>
      </div>
    </div>
  )
}

export default CategoriesBlog;