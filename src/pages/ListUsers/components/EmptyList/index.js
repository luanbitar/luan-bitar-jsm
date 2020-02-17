import "./EmptyList.scss"
import EmptyListIllustration from "assets/il-empty.svg"

function EmptyList() {
  return (
    <section className="empty-list-container">
      <h5 className="message">Nenhum resultado encontrado</h5>
      <EmptyListIllustration className="empty-illustration" />
    </section>
  )
}
export default EmptyList
