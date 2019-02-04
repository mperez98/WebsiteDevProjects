USE lawlinks;

DROP TABLE IF EXISTS links;
CREATE TABLE links
(
  id              int unsigned NOT NULL auto_increment, # Unique ID for the record
  state           varchar(255) NOT NULL,                # State
  href            varchar(255) NOT NULL,                # URL
  text            varchar(255),                			# Text Hyperlink
  description	  varchar(255),							# Description of Link

  PRIMARY KEY     (id)
);