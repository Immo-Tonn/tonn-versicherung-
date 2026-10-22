import Link from "next/link";
import styles from "@/app/(de)/wissen/[slug]/Article.module.css";
import type { Article } from "@/app/(de)/wissen/_lib/articles";
import type { Locale } from "@/i18n/config";
import { formatReviewMonth, reviewLabels } from "@/lib/article-review";

/** Kompakte Prüfzeile unter der Überschrift (alle Beiträge, DE/EN/RU gleich): Name verlinkt auf Über uns der jeweiligen Sprache. */
export default function ArticleReviewNote({ review, locale }: { review: NonNullable<Article["review"]>; locale: Locale }) {
  const l = reviewLabels[locale];
  return (
    <p className={styles.editorial}>
      <span>
        {l.before}
        <Link href={l.href}>{l.name}</Link> · {formatReviewMonth(review.month, locale)}
      </span>
    </p>
  );
}
