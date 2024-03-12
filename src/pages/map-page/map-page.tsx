import React, {
    FC,
    useEffect,
    useState,
    useRef,
    MutableRefObject,
    HtmlHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react'
import './map-page.css'

import L from 'leaflet'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import { MBDCompanyContext } from '../../contexts/mbd-company-provider'
import CompanyCard from '../../components/company-card/company-card'

import { Map, ImageOverlay, Marker } from 'react-leaflet'
import MapImage from '../../assets/map_nymble_svg.svg'
import { Company } from '../model/companyModel'
import CompanyMarker from '../../components/map-marker/company-marker'
import { setActiveLink } from 'react-scroll/modules/mixins/scroller'
import { prependOnceListener } from 'cluster'

interface MapDataState {
    mapImage: string
    mapHeight: number
    mapWidth: number
}

export type Handle<T> = T extends ForwardRefExoticComponent<
    RefAttributes<infer T2>
>
    ? T2
    : never

const MapPage: FC = () => {
    const [mapData, setMapData] = useState<MapDataState | null>(null)
    const [hoverCompanyID, setHoverCompanyID] = useState<string | null>(null)
    const maxBoundFactor = 1.1

    useEffect(() => {
        var img = new Image()
        img.src = MapImage
        img.addEventListener('load', function () {
            const imageRation = this.naturalHeight / this.naturalWidth
            setMapData({
                mapImage: MapImage,
                mapHeight: 1,
                mapWidth: 1 / imageRation,
            })
        })
    }, [])

    const markCompany = (company: Company) => {
        setHoverCompanyID(company.id)
        markCompanyMarker(company.id)
    }

    const unMarkCompany = () => {
        setHoverCompanyID(null)
        markCompanyMarker(null)
    }

    /**
     * Changing the dom directly should be avoided when working with react.
     * However, because the marker can not be react components, a compromise
     * was made in order to prevent all icons to re-render when the state changes.
     * If an other solution is found, you are more than welcome to fix it. Send a
     * main to adajon@kth.se and write how you did it :D
     */
    const markCompanyMarker = (companyID: string | null) => {
        // Inactivate all markers
        const allCompanyMarkers = document.getElementsByClassName(
            getCompanyMarkerClass()
        )
        Array.from(allCompanyMarkers).forEach((companyMarker) => {
            companyMarker.classList.remove('active')
        })

        // Activate the targeted marker
        if (companyID) {
            const markerElement = document.getElementById(
                getCompanyMarkerID(companyID)
            ) as HTMLDivElement
            if (markerElement) {
                markerElement.classList.add('active')
            }
        }
    }

    const getCompanyMarkerID = (companyID: string) => {
        return `company-marker-id-${companyID}`
    }

    const getCompanyMarkerClass = () => 'company-marker-class'

    return (
        <div>
        <div className='map-page'>
            <div className='map-page-company-list-container'>
                <div className='map-page-company-list'>
                    <MBDCompanyContext.Consumer>
                        {(companies) => {
                            return companies.isExhibitor.sort((a, b) => a.mapOrder - b.mapOrder)
                            .map((company) => {
                                return (
                                    <CompanyCard
                                        key={company.id}
                                        onClick={() => {}}
                                        onMouseEnter={() =>
                                            markCompany(company)
                                        }
                                        onMouseLeave={() => unMarkCompany()}
                                        isActive={company.id === hoverCompanyID}
                                        company={company}
                                    />
                                )
                            })
                        }}
                    </MBDCompanyContext.Consumer>
                    <div className='map-page-company-list-end'>
                    </div>
                </div>
            </div>
            <div className='map-page-blur-print-container'>
                {mapData !== null ? (
                    <Map
                        className='map-page-blur-print'
                        center={[mapData.mapHeight / 2, mapData.mapWidth / 2]}
                        zoom={9.5}
                        maxZoom={11}
                        minZoom={9}
                        maxBounds={[
                            [
                                -mapData.mapHeight * (maxBoundFactor - 1),
                                -mapData.mapWidth * (maxBoundFactor - 1),
                            ],
                            [
                                mapData.mapHeight * maxBoundFactor,
                                mapData.mapWidth * maxBoundFactor,
                            ],
                        ]}
                        attributionControl={false}
                        zoomControl={false}
                    >
                        <ImageOverlay
                            zIndex={-1}
                            crossOrigin={false}
                            url={MapImage}
                            bounds={[
                                [-1.55*mapData.mapHeight, -0.6*mapData.mapHeight],
                                [2.2*mapData.mapHeight, 1.9*mapData.mapWidth],
                            ]}
                        />
                        <MBDCompanyContext.Consumer>
                            {(companies) => {
                                return companies.isExhibitor.map(
                                    (company, index) => {
                                        return (
                                            <CompanyMarker
                                                id={getCompanyMarkerID(
                                                    company.id
                                                )}
                                                className={getCompanyMarkerClass()}
                                                mouseEnter={() =>
                                                    markCompany(company)
                                                }
                                                mouseLeave={() =>
                                                    unMarkCompany()
                                                }
                                                key={company.id}
                                                company={company}
                                                number={index + 1}
                                            />
                                        )
                                    }
                                )
                            }}
                        </MBDCompanyContext.Consumer>
                    </Map>
                ) : (
                    <></>
                )}
            </div>
            </div>
            </div>
    )
}

export default MapPage
