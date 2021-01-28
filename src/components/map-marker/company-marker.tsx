import React, { FC } from 'react';
import './company-marker.css';
import { Company } from '../../model/companyModel';
import ReactDOMServer from 'react-dom/server';
import { Marker } from 'react-leaflet';
import { DivIcon } from 'leaflet'

interface MapMarkerProps {
    id: string,
    className: string,
    number: number,
    company: Company,
    mouseEnter: () => void,
    mouseLeave: () => void,
}

const CompanyMarker = React.memo<MapMarkerProps>(
    (props) => {
        const createMarkerHTML = () => {
            return (
                <div className="map-marker-container">
                    <div id={props.id} className={`map-marker ${props.className}`}>
                        <div className="map-marker-content">
                            <div className="map-marker-info-bubble">
                                <img
                                    // Need to add inline styling to override leaflet css
                                    style={{
                                        maxWidth: "100% !important",
                                        maxHeight: "100% !important",
                                    }}
                                    className="map-marker-company-image" 
                                    src={"/assets/companies/" + props.company.logo_path} alt=""/>
                            </div>
                            {props.number}
                        </div>
                    </div>
                    <div className="marker-dot"></div>
                </div>
            );
        }

        const createMapMarker = () => {
            return new DivIcon({
                className: 'map-marker-container',
                html: ReactDOMServer.renderToStaticMarkup(
                    createMarkerHTML()
                )
            });
        }

        return (
            <Marker
                onmouseover={() => props.mouseEnter()}
                onmouseout={() => props.mouseLeave()}
                icon={createMapMarker()} 
                // The position is multiplied with 0.01 for the old markers, 
                // this should be removed when for 2021 when new markers should
                // be placed 
                position={[props.company.mapYPos * 0.01, props.company.mapXPos * 0.01]}/>
        );
    }, 
    (prevProps, currentProps) => {
        return true
    }
);

export default CompanyMarker;
