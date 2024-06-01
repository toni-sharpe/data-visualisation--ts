import React from 'react'

function StyleGuideColorList() {
  return (
    <section className='style-guide style-guide__color column-layout space-children--column'>
      <h3>Colours</h3>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Blue</span>
            <span className='row-layout space-children--with-border details'>
              {['dark', 'dull-dark', '!--', 'light', 'lightest'].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block blue--dark' />
            <li className='style-guide__color-block blue--dull-dark' />
            <li className='style-guide__color-block blue' />
            <li className='style-guide__color-block blue--light' />
            <li className='style-guide__color-block blue--lightest' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Blue Green</span>
            <span className='row-layout space-children--with-border details'>
              {['medium', 'light', 'lightest'].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block blue-green--medium' />
            <li className='style-guide__color-block blue-green--light' />
            <li className='style-guide__color-block blue-green--lightest' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Green Grey</span>
            <span className='row-layout space-children--with-border details'>
              {['!--', 'lightest'].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block green-grey' />
            <li className='style-guide__color-block green-grey--light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Red</span>
            <span className='row-layout space-children--with-border details'>
              {[
                'black',
                'dark',
                'medium',
                'dulled-light',
                'light',
                'very-light',
              ].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block red--black' />
            <li className='style-guide__color-block red--dark' />
            <li className='style-guide__color-block red--medium' />
            <li className='style-guide__color-block red--dulled-light' />
            <li className='style-guide__color-block red--light' />
            <li className='style-guide__color-block red--very-light' />
            <li className='style-guide__color-block red--lightest' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Orange</span>
            <span className='row-layout space-children--with-border details'>
              {['dark', '!--', 'light'].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block orange--dark' />
            <li className='style-guide__color-block orange' />
            <li className='style-guide__color-block orange--light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Green</span>
            <span className='row-layout space-children--with-border details'>
              {['!--', '-hover'].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block menu--green' />
            <li className='style-guide__color-block menu--green-hover' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li>
          <h4 className='row-layout space-children--wide-with-border'>
            <span className='main'>Black, greyscale and white</span>
            <span className='row-layout space-children--with-border details'>
              {[
                'black',
                '--black',
                'dark',
                'dull-dark',
                'medium',
                'light',
                'very-light',
                'lightest',
                '--white',
                'white',
              ].map(level => (<span>{level}</span>))}
            </span>
          </h4>
        </li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block black' />
            <li className='style-guide__color-block grey--black' />
            <li className='style-guide__color-block grey--dark' />
            <li className='style-guide__color-block grey--dull-dark' />
            <li className='style-guide__color-block grey--medium' />
            <li className='style-guide__color-block grey--light' />
            <li className='style-guide__color-block grey--very-light' />
            <li className='style-guide__color-block grey--lightest' />
            <li className='style-guide__color-block grey--white'/>
            <li className='style-guide__color-block white' style={{ boxShadow: '0 0 5px 0 #333' }}/>
          </ol>
        </li>
      </ol>
    </section>
  )
}

export default StyleGuideColorList
