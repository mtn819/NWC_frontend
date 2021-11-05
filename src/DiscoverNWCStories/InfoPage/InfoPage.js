import React from 'react'

import './InfoPage.css';
import InfoVideo from './InfoVideo.js';
import filler from '../res/fillerimg.png';
import { useParams } from 'react-router-dom';

function InfoPage({
  //thumbnail, name, born, career, role,
  //video, tags, biography, quoteTop, quoteBot
}) {
  const { storyId } = useParams();

  const thumbnail = filler;
  const name = "MAYA ANGELOU";
  const born = "APRIL 4, 1928";
  const career = "POET, WRITER, CIVIL RIGHTS ACTIVIST";
  const role = "NATIONAL COMMISIONER";
  const tags = ["tag1", "tag2", "tag3"]
  const quoteTop = "\"All work and no play makes Jack a dull boy.\" ";
  const bioText = "All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. ";
  const quoteBot = "\"All work and no play makes Jack a dull boy.\" ";
  //const video = "https://cdn.vox-cdn.com/thumbor/RWw0ruSCoa1PrEtjEfjXyQofY8M=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69176604/acastro_180403_1777_youtube_0001.0.jpg";
  const videoSRC = "https://av.lib.uh.edu:443/master_files/wh246s17n/embed";
  const videoTitle = "Barbara Trincilla interview";

  return (
    <div>
      <div className="info_topsplash"></div>

      <div className="info_tophead">
        <a href="/DiscoverNWCStories"><div className="info_back">&lt;- BACK TO DISCOVER PAGE</div></a>
        <div className="info_name">{name}</div>
        <div className="info_righthead">
          <div>BIOGRAPHY</div>
          <div>RELATED ARCHIVAL ITEMS</div>
          <div>SOURCES</div>
        </div>
      </div>

      <div className="info_splits">

        <div className="info_leftsplit">
          <div className="info_thumbnail"><img src={filler}/></div>
          <div className="info_imgCred">PHOTO BY JANE DOE</div>
          <div className="info_datum">
            <h3>NAME</h3>
            <p>{name}</p>
          </div>
          <div className="info_datum">
            <h3>BORN</h3>
            <p>{born}</p>
          </div>
          <div className="info_datum">
            <h3>CAREER</h3>
            <p>{career}</p>
          </div>
          <div className="info_datum">
            <h3>ROLE AT NWC</h3>
            <p>{role}</p>
          </div>

          <div className="info_corrections">
              SUBMIT CORRECTIONS
          </div>
        </div>

        <div className="info_rightsplit">
          <div className="info_video">
            <InfoVideo src={videoSRC} title={videoTitle} />
          </div>

          <div className="info_tags">
            <div className="info_usertags">USER TAGS</div>
            <div className="info_suggest">HAVE A SUGGESTION?</div>
            <div className="info_tagshr"></div>
            <div className="info_taglist">
              {tags.map(t =>
                <div className="info_tag">{t}</div>
              )}
            </div>
          </div>


        <div className="info_biography">
          <div className="info_biohead">BIOGRAPHY</div>
          <div className="info_biographyhr"></div>
          <div className="info_quotetop info_quote">{quoteTop}</div>
          <div className="info_biotext">{`STORY ID IS ${storyId}. ${bioText}${bioText}${bioText}${bioText}`}</div>
          <div className="info_quotebot info_quote">{quoteBot}</div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default InfoPage
