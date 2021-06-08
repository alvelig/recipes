import React from 'react'

/**
 * Required for SSR
 */
function Style({ css = '' }) {
  return (
    <style dangerouslySetInnerHTML={{ __html: css }} />
  );
}

export default Style;
